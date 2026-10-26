'use client'

import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react'
import type { PropertyPhoto } from '@/lib/properties'

type PropertyGalleryProps = {
  photos: PropertyPhoto[]
  propertyTitle: string
}

export function PropertyGallery({ photos, propertyTitle }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const visiblePhotos = photos.slice(0, 4)
  const activePhoto = photos[activeIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  function openPhoto(index: number) {
    setActiveIndex(index)
    setIsOpen(true)
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % photos.length)
  }

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + photos.length) % photos.length)
  }

  function handleDialogKeyDown(event: ReactKeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }
  }

  return (
    <>
      <div className="property-gallery" role="group" aria-label={`Photos of ${propertyTitle}`}>
        {visiblePhotos.map((photo, index) => (
          <button
            className="gallery-item"
            key={`${photo.src}-${index}`}
            type="button"
            aria-label={index === 0 ? `View all ${photos.length} photos` : `View photo ${index + 1} of ${photos.length}: ${photo.alt}`}
            onClick={() => openPhoto(index)}
          >
            <Image
              className="gallery-item__image"
              src={photo.src}
              alt={photo.alt}
              fill
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="(max-width: 600px) 100vw, (max-width: 820px) 50vw, 40vw"
            />
            {index === 0 && (
              <span className="gallery-view-all">
                <Images size={15} aria-hidden="true" /> View all {photos.length} photos
              </span>
            )}
          </button>
        ))}
      </div>

      <dialog
        className="gallery-dialog"
        ref={dialogRef}
        aria-labelledby="gallery-dialog-title"
        onCancel={(event) => {
          event.preventDefault()
          setIsOpen(false)
        }}
        onClose={() => setIsOpen(false)}
        onKeyDown={handleDialogKeyDown}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIsOpen(false)
        }}
      >
        <div className="gallery-dialog__inner">
          <div className="gallery-dialog__top">
            <span id="gallery-dialog-title">{propertyTitle} · Photo gallery</span>
            <button
              className="gallery-dialog__close"
              type="button"
              aria-label="Close photo gallery"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="gallery-dialog__stage">
            {activePhoto && (
              <Image
                key={`${activePhoto.src}-${activeIndex}`}
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="(max-width: 1120px) 95vw, 1080px"
              />
            )}
          </div>
          <div className="gallery-dialog__bottom">
            <span>{activePhoto?.alt}</span>
            <div className="gallery-dialog__controls">
              <span aria-live="polite">{activeIndex + 1} / {photos.length}</span>
              <button className="gallery-dialog__arrow" type="button" aria-label="Previous photo" onClick={showPrevious}>
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button className="gallery-dialog__arrow" type="button" aria-label="Next photo" onClick={showNext}>
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
