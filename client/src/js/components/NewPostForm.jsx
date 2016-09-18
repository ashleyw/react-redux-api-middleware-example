import React from 'react'
import { Field, reduxForm } from 'redux-form'

const NewPostForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Title</label>
        <div>
          <Field name="title" component="input" type="text" placeholder="title.."/>
        </div>
      </div>

      <div>
        <label>Body</label>
        <div>
          <Field name="text" component="textarea"/>
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>

    </form>
  )
}

export default reduxForm({
  form: 'newPost'
})(NewPostForm)
