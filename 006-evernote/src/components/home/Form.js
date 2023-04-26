import React from 'react';
import userInput from './../../customhook/useInput'

const Form = () => {
  const [title, bindTitle, resetTitle] = userInput()
  const [content, bindContent, resetContent] = userInput()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ title, content })
    resetTitle()
    resetContent()
  }

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className='white'>
        <h5 className="grey-text">New Note</h5>
        <div className="row">
          <div className="input-field">
            <input id="note_title" type="text" className="validate" {...bindTitle} />
            <label htmlFor="note_title">Note title</label>
          </div>
          <div className="input-field">
            <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
            <label htmlFor="note_content">Note Content</label>
          </div>
        </div>
        <button className="btn green">Add</button>
      </form>
    </div>
  )
}

export default Form