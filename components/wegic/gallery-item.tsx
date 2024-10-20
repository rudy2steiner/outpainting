'use client'
import { Tab, Tabs } from '@nextui-org/react'
import React, { memo } from 'react'
import BeforeAfterSlider from '@/components/before-after'
import { t } from '@lingui/macro'
import { FaAnglesRight, FaArrowRightLong } from 'react-icons/fa6'

export type GalleryItemData = {
  name: string,
  images: string[],
  direction: string,
}
const GalleryItem = memo(({ data }: { data: GalleryItemData[] }) => {

  return (
    <Tabs color={'primary'} placement="top" radius="lg" aria-label="Gallery Image Tabs">
      {
        data.map(({ name, images: [before, after], direction }, index) => (
          <Tab key={name} title={name}>
            <div className="max-w-2xl">
            <div className="w-full flex flex-col md:flex-row gap-6">
                  <div className="w-full flex flex-col items-center justify-center gap-6">
                    <div
                      className=" aspect-[4/3] object-cover ">
                      <img src={before} className="object-cover " />
                      <div className="text-center mt-4">
                        {t`Before Outpainting`}
                      </div>
                    </div>
                  </div>
                  <div className=" aspect-[4/3] object-cover ml-20 ">
                    <img src={after} className="object-cover " />
                    <div className="text-center mt-4">
                      {t`After Outpainting`} <b text-red >: {direction}</b> direction
                    </div>
                  </div>
                </div>
            </div>

          </Tab>
        ))
      }
    </Tabs>
  )
})
GalleryItem.displayName = 'GalleryItem'
export default GalleryItem