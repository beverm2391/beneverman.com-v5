import BookshelfPage from "@/core/components/Pages_/BookshelfPage";
import { queryDBPagination, parseResponse } from "@/lib/reading-list-db"
import { ParsedResult } from "@/types/reading-list"
import { cache } from 'react'

export const revalidate = 60 // 60 seconds
// 0 = always revalidate
// false = never revalidate
// number = seconds to revalidate

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

export default async function Page() {
  const data: ParsedResult[] = await getData()
  console.log('data', data)
  // fs.writeFileSync('parsed-data.json', JSON.stringify(data, null, 4))

  return (
    <div className="pt-8 pb-16">
      <BookshelfPage data={data}/>
    </div>
  )
}