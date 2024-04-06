import ReadingListPage from "@/core/components/Pages_/ReadingListPage"
import { queryDBPagination, parseResponse } from "@/lib/reading-list-db"
import { ParsedResult } from "@/types/reading-list"
import { cache } from 'react'
import { Metadata } from "next";

export const revalidate = 60 // 60 seconds
// 0 = always revalidate
// false = never revalidate
// number = seconds to revalidate

export const metadata: Metadata = {
  title: "Ben Everman | Reading List",
  description: "Everything that I've read recently",
}

const getData = cache(async () => {

  const READING_LIST_DB_ID = process.env.READING_LIST_DB_ID
  if (!READING_LIST_DB_ID) {
    throw new Error('Missing READING_LIST_DB_ID environment variable.')
  }

  const response = await queryDBPagination(READING_LIST_DB_ID)
  // write raw response to file debug
  // fs.writeFileSync('raw-response.json', JSON.stringify(response, null, 4))
  const parsedResponse = parseResponse(response)
  return parsedResponse
})

function ReadingListErrorPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl mb-2 md:mb-8">
        Uh oh! There was an error fetching the reading list 😅. Sorry about that. Make sure you&apos;re connected to the internet.
      </h1>
    </div>
  )
}

export default async function Page() {
  try {
    // ! Get data and return the page if successful
    const data: ParsedResult[] = await getData()
    return (
      <ReadingListPage data={data} />
    )
  } catch (error) {
    // ! If there is an error, log it and return an error page
    console.error(error)
    const data = []
    return (
      <ReadingListErrorPage />
    )
  }
}