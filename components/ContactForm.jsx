import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message: yup.string().required("Required"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log("Contact:", data);
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      alert("Message sent (simulated). Check console.");
    } catch (e) {
      alert("Failed to send (simulated)");
    }
  };

  return (
    <form
      id="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl bg-white p-6 rounded-2xl shadow"
    >
      <h3 className="text-xl font-bold">Contact Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <textarea
          {...register("message")}
          placeholder="Message"
          rows={5}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <div className="mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Send Message
        </button>
        {isSubmitSuccessful && (
          <span className="ml-3 text-green-600">Sent!</span>
        )}
      </div>
    </form>
  );
}
