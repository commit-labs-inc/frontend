"use client";

export function Banner({ title, subtitle}) {
  return (
    <div className="flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:pr-3.5 lg:pl-8">
      <p className="text-sm leading-6 text-white">
        <a href="#">
          <strong className="font-semibold">{title}</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          {subtitle}
        </a>
      </p>
    </div>
  )
}