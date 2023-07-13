
export default function Loading() {
  // Or a custom loading skeleton component
  return (<>
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="spinner">
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
      </div>
    </div>
  </>)
}