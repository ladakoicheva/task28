import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form({ onSubmit }) {
  const InputSchema = Yup.object({
    task: Yup.string()
      .required("Task is required")
      .min(5, "Task must be at least 5 characters long"),
  });

  const formik = useFormik({
    initialValues: {
      task: "",
    },
    validationSchema: InputSchema,

    onSubmit: (values) => {
      onSubmit(values.task);
      formik.resetForm();
    },
  });

  return (
    <>
      <form className="todo-form" onSubmit={formik.handleSubmit}>
        {formik.touched.task && formik.errors.task ? (
          <div className="field-error">{formik.errors.task}</div>
        ) : null}
        <input
          className="todo-input"
          id="task"
          name="task"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.task}
          placeholder="Add a new task..."
        />
        <button className="todo-add" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
