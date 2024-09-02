import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Example Input
          </label>
          <input
            defaultValue="test"
            {...register("example")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Required Input
          </label>
          <input
            
            {...register("exampleRequired", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.exampleRequired && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="flex justify-end">
          <input
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
