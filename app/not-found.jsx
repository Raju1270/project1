import Link from 'next/link'

export default function FourOhFour() {
  return (<>
    <section class="my-10">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="my-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-400">404</h1>
          <p class="my-4 text-3xl tracking-tight font-bold ">Something&apos;s missing.</p>
          <p class="my-4 text-lg font-light ">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
          <Link href="/" class="lg:cursor-none primary_button inline-flex font-medium rounded-lg px-5 py-2.5 text-center my-4">Back to Homepage</Link>
        </div>
      </div>
    </section>
  </>)
}