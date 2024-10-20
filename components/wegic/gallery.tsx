'use client'
import React from 'react'
import GalleryItem from '@/components/wegic/gallery-item'
import {t} from '@lingui/macro'

export default function Gallery() {

  const data: { name: string, images: string[], direction: string }[] = [
    {
         name: 'Photos',
         images: [
           'https://pic.wela.tech/outpainting/pt_test.jpeg',
           'https://pic.wela.tech/outpainting/pt_painting.png'
         ],
         direction: 'Up,Down'
       },
    {
      name: 'Arts',
      images: [
        'https://pic.wela.tech/outpainting/arts.jpeg',
        'https://pic.wela.tech/outpainting/arts_painting.png'
      ],
      direction: 'Up,Down,Right,Left'
    },
    {
      name: 'Characters',
      images: [
          'https://pic.wela.tech/outpainting/character.jpg',
          'https://pic.wela.tech/outpainting/character_painting.png'
      ],
      direction: 'Up'
    },
    {
      name: 'Scenery',
      images: [
       'https://pic.wela.tech/outpainting/scenery.jpg',
                'https://pic.wela.tech/outpainting/scenery_painting.png'
      ],
      direction: 'Up,Down'
    }

  ]


  return (
    <section className="bg-white dark:bg-slate-800 pt-10">
      <div>
        <div className="max-w-7xl mx-auto py-10 px-4">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:max-w-none lg:mx-0">
            <h2 className="TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-slate-50">
              <div className="_editable_jwu41_1 undefined"
                   data-link="link=&amp;target=_blank&amp;text=AI%20Outpainting%20Gallery">{t`AI Outpainting Gallery`}
              </div>
            </h2>
            <div className="mt-4 lg:mt-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
              <p className="DESC text-base font-normal text-slate-700 dark:text-slate-300 mt-4 lg:mt-0">
                {t`Browse
                through stunning examples of AI outpainting, showcasing the limitless possibilities of extending
                artworks.`}
              </p>
              <p className="DESC text-base font-normal text-slate-700 dark:text-slate-300 mt-4 lg:mt-0">
                {t`Each
                piece in our gallery demonstrates the power of AI in transforming and enhancing creative projects.`}
              </p>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-16 flex justify-center">
            <GalleryItem data={data} />
          </div>
        </div>
      </div>
    </section>
  )
}