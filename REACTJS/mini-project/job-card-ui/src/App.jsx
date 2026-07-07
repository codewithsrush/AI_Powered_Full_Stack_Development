import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      id: 1,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKueq1tsHBNK-60iE4zuAMN8scsdu8Uy4ak9C7_S0nQ&s=10",
      companyName: "Google",
      datePosted: "2 days ago",
      role: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Bangalore, India",
    },
    {
      id: 2,
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACUCAMAAAD1XwjBAAAAzFBMVEX////zUSP/uQECpO9/uQL///1/uQEBpO/+/f////v8///zUCb///V+uwABpPH2TyLsrgD//+/K+/r//+Xy//+sx3T+/dL7/d2AswDPl3f9+cbh/f3nUSNupQBGpNEAoOXswE0Ai8vPPADs1cW00X7UcFLRaFDw/vSWtUi96Ozy1XYAidT98usAitDiSSPSakuQt0T+8+O5X0a8WT2wxXyHpTnCYVPr0M+qz3fMp5TKpIXy3trR3K7AzpY+jru74u7ktEs0j7QVlsHctlJ35PKvAAADsUlEQVR4nO2ca1vTMBiGU7usSRtaYuecCsyJHB3g+awg/v//ZJJuHIqW5W3mij7PWKHsGtfdu2/Ghz5XGUMQBEGQfzacEiEYl5KLVcMzIj+z+JKT3736VCCSlFWz21T8nHICAoPMYC6/1b//ZpfL2VbUl4C4sr3xixsvBogkjbCUbkN7c0h8EoDjd0tYERJw/g3JdDp9ZZ92s3iUsvz6ISVlkDPgJtcIfP2MkjfbBl+93aTknZb230fLg5jz72xQsrMtLf+o553RaF9LFpI/KqLIPT2yuy3lnn4+6vU9s9YbvQzKf7JRFFFW+CU6MfzK8ffM19VH026vv7bWd/wipP8oy7Ii84rh547fLx3i50Ia/j7B/35o/qLIfOd/xt9b84mZ/qX4r0bad/0yy9/34a+Odgn8UeZHH2UzfsL67S1hfkj8bv6912+/Y/y+/vvLWL9/03/H+OEf/Jgf+Id/+Id/+If/u+X/rvNjfuAf/uEf/uEf/sHvy4/5gX/4h3/4h3/4B78vP+YH/u+8/8KX3/Y3eNWf8axfVf0H3p5/fgy7G8cuzX2341ref1DlVH/cHPlnc1+rqjrdHt8cwKdHlHz+ojRTXx9Q8k25CnSAFqU9gHkHtblyXaug6pKzwSCdat+UpdkY+8IWf1vzM1dG5q6ILRpT6+na4nO6p6fUKrP9i2H4b+FuOiKl0nmBfrHSsRCuN13JCsHP0zSVMvUPl0prIZT2Kz7PBzXE/LjPT4Nyn5aBLoUYPvbPcDgMsn5n/Oz75MjlRWOOrmfy/VSWqT5cp+QsyOenWYBmItPB1jjP8zjOmxPXsnUw2GPl4T1KnpZKtP/4dPzM8seOv07YHMsv6PxMBOWPkzhP4stHnMTNux3jh3/4/5/5fecnd/y8M/ye8uOKX+qu8NcdL7Z+VWf4ff13jR/+4R/+4R/8NH7MD/zDP/zDP/zDP/h9+TE/8A//8A//8A//4Pflx/zAP/wv7t9e/0o7xG/9J5XYK6fiD2clr67fpUq26W/wtndBvMY/TnIjtbIbXxyM280vfrh8NRmfG/4W1095UP44Hic+w989fsL16+7wm/FPzPOWBtO1dMl/4gM+b2N1iN/M/tgzyXjrgClif2z9LCj/j8nkaOKd81PHT+rv/az4A90G9wkpg0Fq7x87pKQMegtfQnu1CpOSU27fq1Q4eHJSRr51cVD71FR3sqZWp8OStHG4Ou55aMM/4/c75C7dv92GdspY4PEnTzDvwkJEEARBkG7lF9zh1kbGMAVRAAAAAElFTkSuQmCC",
      companyName: "Microsoft",
      datePosted: "5 days ago",
      role: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$55/hr",
      location: "Hyderabad, India",
    },
    {
      id: 3,
      brandLogo: "data:image/jpeg;base64,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",
      companyName: "Apple",
      datePosted: "1 week ago",
      role: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$72/hr",
      location: "Bangalore, India",
    },
    {
      id: 4,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
      companyName: "Meta",
      datePosted: "3 days ago",
      role: "React Frontend Engineer",
      tag1: "Remote",
      tag2: "Junior Level",
      pay: "$68/hr",
      location: "Remote, India",
    },
    {
      id: 5,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZciLmZ88o0cLKtDAqEAvqA1fHAYVb2MXxcJl_VOLRqw&s=10",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      role: "SDE I",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$52/hr",
      location: "Pune, India",
    },
    {
      id: 6,
      brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
      companyName: "Netflix",
      datePosted: "4 days ago",
      role: "Backend Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Los Gatos, USA",
    },
    {
      id: 7,
      brandLogo: "data:image/png;base64,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",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      role: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$76/hr",
      location: "Pune, India",
    },
    {
      id: 8,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaKS6lRGOkkxHIzgHJ0S_VMHZJA4MZbdlJbbK66B6_w&s=10",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      role: "Full Stack Developer",
      tag1: "Hybrid",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Noida, India",
    },
    {
      id: 9,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmO3NvxWiCNfNaZtN0GcTPruKG4tjHPfCh3X0wQJAePg&s=10",
      companyName: "Salesforce",
      datePosted: "1 day ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$64/hr",
      location: "Hyderabad, India",
    },
    {
      id: 10,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLl88meInqKxDj-4nEbLyRbro-9D8IFIpfhJ_e2Eh1Q&s=10",
      companyName: "Oracle",
      datePosted: "5 days ago",
      role: "Cloud Application Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$57/hr",
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
     { jobOpenings.map(function(elem){

      return <Card logo = {elem.brandLogo} company ={elem.companyName} posting ={elem.datePosted} role = {elem.role} 
              tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location={elem.location}/>

     })}
      
    </div>
  )


}
export default App
