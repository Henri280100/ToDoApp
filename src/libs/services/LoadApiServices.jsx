import { useEffect } from "react";
import { BaseUrl } from "./RoutePath";
import { useQuery } from "@tanstack/react-query";

const GetAllNotes = () => {
  const {isLoading, isError, data, error} = useQuery({
    queryKey: ['']
  })

  // useEffect(() => {
  //   getNotes();
  // }, []);

  //       const getNotes = async () => {
  //         let response = await fetch(`${BaseUrl}`);
  //         let data = await response.json();
  //         console.log(123, data);
  //         setNotes(data);
  //       };
};

