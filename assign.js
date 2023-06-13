import details from './query.json' assert {type:"json"}
document.querySelector(".maincontainer")

let maincontainer = document.querySelector('.maincontainer')

details.forEach((ele,i) => {
  console.log(ele.query)
    maincontainer.innerHTML += `<div class= "maincard"><div class="card w-75 mb-3">
    <div class="card-body">
      <h5 class="card-title">${ele.question}</h5>
      <div class="mainbtn">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${i}staticBackdrop">
            Show Solution
          </button>
        </div>
          
          
          <div class="modal fade" id="${i}staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Solution</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">${ele.query}</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </div>
    </div>
    </div>`
    
});
