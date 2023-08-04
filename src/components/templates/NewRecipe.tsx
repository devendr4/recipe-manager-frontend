import { useForm } from "react-hook-form";
import { BaseTemplate } from "./BaseTemplate";

export const NewRecipeTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <BaseTemplate>
      <h1>new recipe</h1>
      <form
        onSubmit={handleSubmit(data => console.log(data))}
        class={"flex flex-col gap-3"}
      >
        <input {...register("recipeName")} class={"text-black"} />
        {errors.recipeName && <p>Recipe name is required</p>}
        <select {...register("gender")} class={"text-black"}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </BaseTemplate>
  );
};
