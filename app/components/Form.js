export default function form() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-sm-4 my-1">
          <input
            type="text"
            className="form-control"
            id="cityInput"
            placeholder="Enter City"
          />
        </div>
        <div className="col-auto my-1">
          <button type="submit" className="btn btn-primary" id="searchBtn">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
