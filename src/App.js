import './App.css';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

function Forms() {
  const [formValue, setFormValue] = useState();
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          agreement: false,
          switcher: 'no',
          gender: 'nSpecified',
          texter: ''
        }}

        onSubmit={
          // Пытаюсь тут вызвать ф-цию
          //checkError(value)
          (value) => setFormValue(JSON.stringify(value))
        }
      >
        {({ errors, touched, isValidating }) => (
        <Form>
          <div>
            Ваше имя:<br />
            <Field
              name="firstName"
              type="text"
              validate={validateFirstName}
              
            />
            {errors.firstName && <div>{errors.firstName}</div>}

          </div>
          <br />
          <div>
            Выберите любимые цвета:<br />
            <Field name="green" type="checkbox"/> Зеленый <br />
            <Field name="red" type="checkbox"/> Красный <br />
            <Field name="blue" type="checkbox"/> Голубой <br />
          </div>
          <br />

          <div>
            Вы согласны с правилами соглашения?<br />
            <Field
              name="switcher"
              type="radio"
              value="yes"
            /> Да

            <Field
              name="switcher"
              type="radio"
              value="no"
            /> Нет <br />
          </div>
          <br />

          <div>
            Ваш пол:<br />
            <Field as="select" name="gender">
              <option value="nSpecified">(не указан)</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </Field>
          </div>
          <br />

          <div>
            Выши пожелания:<br />
            <Field
              as='textarea'
              name='texter'
            />
          </div>
          <br />

          <div>
            <Field
              type="submit"
              value="Отправить"
            />
          </div>
          <br />

        </Form>
        )}
      </Formik>
      {formValue}
    </div>
  );
}
/*
//ф-ция для проверок
function checkError(values, props) {

  return ();
}
*/

function validateFirstName(value) {
  let error;
  if (!value) {
    error = <span>Поле не заполнено</span>;
  } else if (value !== [/^[А-Я][а-я]{1,}$/mg]) {
    error = 
      <span>
        Имя не соответствует требованиям<br/>
        * только кириллица<br/>
        * первая буква заглявная
      </span>;
  }

  return error;
}




function App() {
  return (
    Forms()
  );
}

export default App;
