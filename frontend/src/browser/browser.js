import './Browser.css';
import img from './student.jpg'

function Browser() {
  return (
    
    <div class="col-md-6 col-sm-12 mb-3">
        
        <div class="card">
            <div class="card-header d-flex flex-row">
                
                <i class="fa-solid fa-circle icon-red m-1"></i>
                <i class="fa-solid fa-circle icon-yellow m-1"></i>
                <i class="fa-solid fa-circle icon-green m-1"></i>
                <div class="mx-auto card w-75 m-10">
                    Grade Application11
                </div>
                <a href="github.com" class="fa fa-brands fa-github fa-2x link-dark link-no-style">
                    
                </a>
            </div>
            <div class="card-body p-0">
                <img src={img} class="img-fluid" alt="Project Screenshot"/>

            </div>
        </div>
    </div>

  );
}

export default Browser;
