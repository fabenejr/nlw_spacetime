'use client'

import { ChangeEvent, useState } from 'react'

export function Mediapicker() {
  const [preview, setPreview] = useState<string | null>(null)
  function onFileSelection(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }
  return (
    <>
      <input
        onChange={onFileSelection}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspec-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
