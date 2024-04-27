import React from "react"
import matter from "gray-matter"
import fs from "fs"
import Markdown from "markdown-to-jsx"

const read_md = (f: string) => {
  const path = "./app/(hoistme)/md-posts"
  // const files = fs.readdirSync(path)

  // const mds = files.filter((f) => f.endsWith(".md"))

  return matter(fs.readFileSync(`${path}/${f}`, "utf8"))
}

export async function generateStaticParams() {
  const path = "./app/(hoistme)/md-posts"
  const files = fs.readdirSync(path)

  const mds = files.filter((f) => f.endsWith(".md"))

  return mds.map((f) => ({
    
    post: f,
  }))
}

export default function Post({ params }: any) {
  const { post } = params
  const md = read_md(post)
  return (
    <>
      <div className="text-lg">{post}</div>
      <div className="text-sm"><Markdown>{md.content}</Markdown></div>
    </>
  )
}
