import { FC, ReactElement } from "react";

export const ReactModule: FC = (): ReactElement => {
  return (
    <form method="POST" className="w-full">
      <label>
        Full Name:
        <input className="my-4" type="text" name="fullname" required />
      </label>
      <br />

      <label className="flex items-center my-4">
        Coments:
        <textarea name="comments" required class="w-[500px] mx-4"></textarea>
      </label>
      <label>
        Kehadiran :
        <select name="attendance" id="">
          <option value="hadir">hadir</option>
          <option value="tidak">tidak</option>
        </select>
      </label>
      <button className="bg-blue-400 rounded-md mx-4 p-2">Submit</button>
    </form>
    //  {
    //         comments?.data.map((data) => (
    //           <ul>
    //             <li class="bg-white p-1">{data?.attributes.Full_Name}</li>
    //             <li>{data?.attributes.Attendance ? "Hadir" : "Tidak Hadir"}</li>
    //             <li>{data?.attributes.Comment}</li>
    //           </ul>
    //         ))
    //       }
  );
};
