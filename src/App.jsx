import { React } from "react";

function App() {

  const data = [
    {
      plan: "FREE",
      cost: "0",
      user: "Single User",
      storage: "5GB Storage",
      projects: "Unlimited Public Projects",
      project_Acc:true,
      acess: "Community Access",
      acess_acc:true,
      private: "Unlimited Private Projects",
      private_acc:false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupport_acc:false,
      subDomain: "Free Subdomain",
      subDomain_acc:false,
      reports: "Monthly Status Reports",
      reports_acc:false,
    }, {
      plan: "PLUS",
      cost: 9,
      user: "5 User",
      storage: "50GB Storage",
      projects: "Unlimited Public Projects",
      project_Acc:true,
      acess: "Community Access",
      acess_acc:true,
      private: "Unlimited Private Projects",
      private_acc:true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupport_acc:true,
      subDomain: "Free Subdomain",
      subDomain_acc:true,
      reports: "Monthly Status Reports",
      reports_acc:false,
    },
    {
      plan: "PRO",
      cost: 49,
      user: "Unlimited User",
      storage: "150GB Storage",
      projects: "Unlimited Public Projects",
      project_Acc:true,
      acess: "Community Access",
      acess_acc:true,
      private: "Unlimited Private Projects",
      private_acc:true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupport_acc:true,
      subDomain: "Unlimited Free Subdomain",
      subDomain_acc:true,
      reports: "Monthly Status Reports",
      reports_acc:true,

    },

  ];


  return <>
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
          data.map((e)=>{
              return <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{e.plan}</h5>
                    <h6 class="card-price text-center">${e.cost}<span class="period">/month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.user}</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.storage}</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.projects}</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.acess}</li>
                      <li class={e.private_acc == false? "text-muted": ""} ><span class="fa-li"><i class={e.private_acc == false? "fas fa-times" :"fas fa-check"}></i></span>{e.private}</li>
                      <li class={e.phoneSupport_acc == false? "text-muted": ""} ><span class="fa-li"><i class={e.phoneSupport_acc == false? "fas fa-times" :"fas fa-check"}></i></span>{e.phoneSupport}</li>
                      <li class={e.subDomain_acc == false? "text-muted": ""} ><span class="fa-li"><i class={e.subDomain_acc == false? "fas fa-times" :"fas fa-check"}></i></span>{e.subDomain}</li>
                      <li class={e.reports_acc == false? "text-muted": ""} ><span class="fa-li"><i class={e.reports_acc == false? "fas fa-times" :"fas fa-check"}></i></span>{e.reports}</li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                  </div>
                </div>
              </div>
              })
}

        </div>
      </div>
    </section>
  </>
}

export default App;