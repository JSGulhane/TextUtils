import React  from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'

    // }) 
   

    let myStyle = {
        color: props.mode === 'dark'? 'white': '#042743',
        backgroundColor: props.mode === 'dark'? '#042743': 'white'
    }

  return (

                <div className='container' style={myStyle}>
                    <h1 className='my-3'>About Us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 <b>Features</b>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>TextUtils Features:</strong> Our website offers various features including text analysis, word count, character count, and more to help you optimize your content.
                </div>
                </div>
            </div>                              
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <b>Benefits</b>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>Why Use TextUtils:</strong> TextUtils helps you create clear, concise, and effective content, making it easier for readers to understand and engage with your text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <b>How It Works</b>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>Using TextUtils:</strong> Simply enter your text into the input field and select the desired options. Our app will instantly analyze your text and provide useful insights.
                </div>
                </div>
            </div>
            </div>
          
    </div>
  )
}
