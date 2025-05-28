import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h2>{props.tit}</h2>
        <div className="mb-3">
            <textarea class="form-control" id="MyBox" rows="3"></textarea>
        </div>
        <button className='btn btn-primary'>Convert to UpperCase</button>
    </div>
  )
}
TextForm.defaultProps={
    tit:"Default textbox"
}