'use client'
import React, { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "./Buttons"
import { IHistoryData, IURLApiData } from "@/data/interfaces"

const apiEndpoint = 'https://api.shrtco.de/v2/shorten?url='

const ShortenedLink = ({ originalLink, shortLink }: {
  originalLink: string,
  shortLink: string,
}) => (
  <article className="rounded-xl bg-white">
    <h3 className="visually-hidden">Shortened link</h3>
    <div className="content grid md:grid-cols-2 items-center">
      <p className="px-4 py-[6px] text-p16">{originalLink}</p>
      <div className="shorten-link py-[6px] px-4 grid gap-4 md:gap-6 mb-[10px] pt-3 border-t border-grayish-violet border-opacity-25 md:border-none">
        <p className="text-cyan md:text-right">{shortLink}</p>
        <Button textContent="Copy" type="cyan-rounded"
          customStyles="hover:bg-very-dark-violet active:bg-very-dark-violet"
          attrs={{
            onClick: () => navigator.clipboard.writeText(shortLink)
          }}
        />
      </div>
    </div>
  </article>
)

export const ShortUrlSection = () => {
  const [history, setHistory] = useState<IHistoryData[] | []>([])
  useEffect(() => {
    const storage = localStorage.getItem('history')
    if (!storage) return
    setHistory(JSON.parse(storage))
  }, [])

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history))
  }, [history])

  const historyToDisplay = useMemo(() => {
    return history?.map((data: IHistoryData, index: number) => (
      <ShortenedLink
        key={index}
        originalLink={data.originalLink}
        shortLink={data.fullShortLink}
      />
    ))
  }, [history])

  const urlInpRef = useRef<HTMLInputElement>(null)
  const inputErrorRef = useRef<HTMLLabelElement>(null)
  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (
      !urlInpRef.current
      || urlInpRef.current.value.length === 0
    ) {
      inputErrorRef.current?.classList.add('error')
      return
    }


    try {
      const response = await fetch(apiEndpoint + urlInpRef.current.value)
      const data: IURLApiData = await response.json()
      if (!data.ok) {
        throw new Error(data.error)
      }

      setHistory(prevState => [
        {
          originalLink: data.result.original_link,
          fullShortLink: data.result.full_short_link
        },
        ...prevState
      ])
    } catch (e) {
      console.log(e)
      inputErrorRef.current?.classList.add('error')
      return
    }

    inputErrorRef.current?.classList.remove('error')
    urlInpRef.current.value = ''
    return
  }

  return (
    <section className="short-url-section relative">
      <h2 className="visually-hidden">Short URL</h2>
      <div className="bg absolute w-full h-full bg-light-gray -z-10 bottom-0 left-0"></div>
      <div className="container mx-auto mt-6 p-6">
        <div
          className="p-6 form-area bg-dark-violet rounded-xl"
        >
          <form className="grid gap-4 md:grid-cols-2 items-start" onSubmit={handleFormSubmit}>
            <label ref={inputErrorRef}>
              <span className="visually-hidden">Enter URL</span>
              <input
                ref={urlInpRef}
                type="url"
                name="url"
                placeholder="Shorten a link here.."
                className="w-full border-2 border-white rounded-md placeholder:text-grayish-violet placeholder:opacity-50 py-2 px-3 text-[1rem]"
              />
              <span className="error text-red text-[.75rem] hidden mt-2">
                Please add a link
              </span>
            </label>
            <Button
              textContent="Shorten It!"
              type="cyan-rounded"
              customStyles="py-2 text-p-m"
            />
          </form>
        </div>
        <div className="mt-6 grid gap-6">
          {historyToDisplay}
        </div>
      </div>
    </section>
  )
}