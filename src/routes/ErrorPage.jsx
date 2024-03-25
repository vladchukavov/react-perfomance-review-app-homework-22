
const ErrorPage = () => {
  const returnHome = () => {
    window.location.href = "/"
  }

  return (
    <>
      <section className={`text-center m-72 flex flex-col justify-center gap-20`}>
        <h1 className={`text-5xl font-bold text-sky-200`}>Error 404</h1>
        <p className={`text-3xl font-medium text-sky-200`}>This page was not found or was removed because the developer did not like it</p>
        <button onClick={returnHome} className={`m-auto font-medium rounded-3xl text-2xl px-10 py-2 bg-sky-300 opacity-85 hover:opacity-30 duration-500`}>🏡</button>
      </section>
    </>
  )
}

export default ErrorPage
