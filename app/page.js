'use client'

export default function Home() {

  const handleSubmit = () => {
    window.alert("Submitted!")
  }

  return (
    <div class="container text-center mt-5">
      <h1 class="text-center pb-2 mb-4 border-bottom">Redux Weather</h1>

      <form onSubmit={handleSubmit}>
        <div class="row justify-content-center">
          <div class="col-sm-4 my-1">
            <input
              type="text"
              class="form-control"
              id="cityInput"
              placeholder="Enter City"
            />
          </div>
          <div class="col-auto my-1">
            <button type="submit" class="btn btn-primary" id="searchBtn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
