import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWatch } from "react-hook-form";

import McSelect from "../../../shared/components/Select";
import {
  getCountries,
  selectCountries,
  getDepartments,
  selectDepartments,
} from "../../../store/slicers/common";

import useStyles from '../style';
import { ICountry } from "../../../shared/models/Interfaces/countries";
import { IDepartment } from "../../../shared/models/Interfaces/departments";

const SecondStep = (): JSX.Element => {
  const countries = useSelector(selectCountries);
  const departments = useSelector(selectDepartments);
  const [cities, setCities] = useState([]);
  const [jobs, setJobs] = useState([]);

  const { country, department }: any = useWatch();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getDepartments());
  }, [dispatch]);

  const getCitiesByCountry = useCallback(
    (country) => {
      const selectedCountry = countries.find(
        (item: ICountry) => item.countryName === country
      );

      setCities(selectedCountry?.cities);
    },
    [countries]
  );

  const getJobsByDepartment = useCallback(() => {
    const selectedDepartment = departments.find(
      (item: IDepartment) => item.departmentName === department
    );

    setJobs(selectedDepartment?.jobs);
  }, [departments, department]);

  useEffect(() => {
    if (country) {
      getCitiesByCountry(country);
    }
  }, [country, dispatch, getCitiesByCountry]);

  useEffect(() => {
    if (department) {
      getJobsByDepartment();
    }
  }, [department, getJobsByDepartment]);

  return (
    <div className={classes.wrapper}>
      <McSelect
        options={departments}
        label="Department"
        name="department"
        optionText="departmentName"
        optionKey="departmentName"
      />
      <McSelect
        options={jobs}
        label="Job title"
        name="job_title"
        disabled={!department}
      />
      <McSelect
        options={countries}
        label="Country"
        name="country"
        optionText="countryName"
        optionKey="countryName"
      />
      <McSelect options={cities} label="City" name="city" disabled={!country} />
    </div>
  );
};

export default SecondStep;
