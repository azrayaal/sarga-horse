import { useEffect, useRef, useState } from 'react'

// Reveal an element once it scrolls into view
export function useInView(options = { threshold: 0.18 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.unobserve(el)
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}

// Live countdown to an ISO target date → { days, hrs, min, sec, done }
export function useCountdown(target) {
  const compute = () => {
    const diff = new Date(target).getTime() - Date.now()
    if (diff <= 0) return { days: 0, hrs: 0, min: 0, sec: 0, done: true }
    const s = Math.floor(diff / 1000)
    return {
      days: Math.floor(s / 86400),
      hrs: Math.floor((s % 86400) / 3600),
      min: Math.floor((s % 3600) / 60),
      sec: s % 60,
      done: false,
    }
  }
  const [t, setT] = useState(compute)
  useEffect(() => {
    const id = setInterval(() => setT(compute()), 1000)
    return () => clearInterval(id)
  }, [target])
  return t
}

// Count-up number animation, triggered when active becomes true
export function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf
    let start
    const step = (t) => {
      if (start === undefined) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}
