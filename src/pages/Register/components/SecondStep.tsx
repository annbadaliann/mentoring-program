import { useCallback, useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import McSelect from "../../../shared/components/Select";

const API_URL = "http://localhost:8000/";

const SecondStep = (): JSX.Element => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [jobs, setJobs] = useState([]);
  // const { control } = useFormContext();
  const { country, department } = useWatch()

  const getCountries = async () => {
    const reqOpts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `${API_URL}countries`;

    const res = await fetch(url, reqOpts).then((res) => res.json())
    console.log(res, 'res')

    setCountries(res);
  };

  const getDepartments = async () => {
    const reqOpts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `${API_URL}departments`;

    const res = await fetch(url, reqOpts).then((res) => res.json())

    setDepartments(res);
  };

  const getCities = useCallback(() => {
    console.log(countries, )

    const thatCountry = countries.find(item => {
      return item.countryName === country;
    })

    console.log(thatCountry)
    setCities(thatCountry?.cities);
  }, [countries, country]);

  const getJobs = useCallback(() => {

    const selectedDepartment = departments.find(item => {
      return item.departmentName === department;
    })


    setJobs(selectedDepartment?.jobs);
  }, [departments, department]);

  useEffect(() => {
    getCountries();
    getDepartments();
  }, []);

  useEffect(() => {
    if(countries.length){
      getCities()
    }
  }, [countries.length, getCities])

  useEffect(() => {
    if(departments.length){
      getJobs()
    }
  }, [departments.length, getJobs])


  return (
    <div>
      <McSelect options={departments} label="Department" name="department" optionText="departmentName" optionKey="departmentName"/>
      <McSelect options={jobs} label="Job title" name="job_title" />
      <McSelect options={countries} label="Country" name="country"  optionText="countryName" optionKey="countryName"/>
      <McSelect options={cities} label="City" name="city" disabled={!country} />
    </div>
  );
};

export default SecondStep;
