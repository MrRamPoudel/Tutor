import React from "react";

export default function Tutor({fname, tutorName}){
return (<div >
<h2 className="pl-1 text-lg font-semibold text-left" >{tutorName || fname}</h2>
</div>);
}