/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styles from './LicenciasMedicas.module.scss';
import type { ILicenciasMedicasProps } from './ILicenciasMedicasProps';
import LicenciasMedicasInputComponent from './LicenciasMedicasInputComponent/LicenciasMedicasInputComponent'
import LicenciasMedicasSelectComponent from './LicenciasMedicasSelectComponent/LicenciasMedicasSelectComponent';
import LicenciasMedicasDatePickerComponent from './LicenciasMedicasDatePickerComponent/LicenciasMedicasDatePickerComponent';
import LicenciasMedicasButtonComponent from './LicenciasMedicasButtonComponent/LicenciasMedicasButtonComponent';
import LicenciasMedicasTextareaComponent from './LicenciasMedicasTextareaComponent/LicenciasMedicasTextareaComponent';
import { UseEmployeesStore } from '../store/employee';
import { useEffect } from 'react';
import { UseRegisterStore } from '../store/RegistroLicencia';
const LicenciasMedicas: React.FC<ILicenciasMedicasProps> = () => {

  const employees = UseEmployeesStore(state => state.employees)
  const isLoading = UseEmployeesStore(state => state.isLoading)
  const fetchEmployees = UseEmployeesStore(state => state.fetchEmployees)
  const selectEmployee = UseEmployeesStore((state) => state.selectEmployee)
  const selectedEmployee = UseEmployeesStore((state) => state.selectedEmployee)
  const registerLeave = UseRegisterStore((state => state.registerLeave))
  const setRegisterLeave = UseRegisterStore((state => state.setRegisterLeave))
  const setLeaveDays = UseRegisterStore((state => state.setLeaveDays))
  const setTssRefound = UseRegisterStore((state => state.setTssRefound))
  const postRegisterLeave = UseRegisterStore((state => state.postRegisterLeave))

  useEffect(() => {
    void fetchEmployees();
  }, [fetchEmployees]);


  const getEmployeeOptions = () => {
    const options = employees.map((key) => ({
      value: key.EmployeeId,
      label: `${key.EmployeeId} ${key.Name}`
    }))
    return options
  }

  const handleSelectEmployee = (selectedOption: any) => {

    const selectedEmployeeId = selectedOption.value;
    selectEmployee(selectedEmployeeId)
    const selectedEmployeeProps = employees.find(employee => employee.EmployeeId === selectedEmployeeId)
    if (selectedEmployeeProps) {
      setRegisterLeave('Name', selectedEmployeeProps.Name)
      setRegisterLeave('Code', selectedEmployeeProps.EmployeeId)
      setRegisterLeave('Position', selectedEmployeeProps.Position)
      setRegisterLeave('Area', selectedEmployeeProps.Area)
    }

  };

  const handleInputChange = (value: any, stateName: string) => {
    if (selectedEmployee) {
      if (stateName === 'TotalDays') setLeaveDays(value, selectedEmployee.Salary)
      if (stateName === 'TSSRefund') setTssRefound(value)
      setRegisterLeave(stateName, value)
    }
  };
  const sendRegisterLeave = async () => {

    setRegisterLeave('DepartureDate', registerLeave.DepartureDate)
    setRegisterLeave('EndDate', registerLeave.EndDate)
    setRegisterLeave('ReEntryDate', registerLeave.ReEntryDate)
    setRegisterLeave('DateRecieved', registerLeave.DateRecieved)
    setRegisterLeave('Date', registerLeave.Date)
    console.log(typeof(registerLeave.DepartureDate))
     await postRegisterLeave(registerLeave)
  }

  return (


    <>
      <div className={`${styles.borderBottom}`}>
        <h1 className='text-[#0058a6] ml-4 mb-2 text-2xl'>Registro Licencia Médica</h1>
      </div>
      <div className='flex justify-end my-1'>
        <span className='text-[10px] font-extrabold'>Campos marcados con <strong className='text-red-600'>*</strong> son obligatorios</span>
      </div>
      <form className='mt-10 mx-2'>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasSelectComponent labelName='Colaborador' isRequired labelFor='Name' options={getEmployeeOptions()} isLoading={isLoading} onSelect={handleSelectEmployee} />
          <LicenciasMedicasInputComponent labelName='Posición' stateName='Position' onChange={handleInputChange} isDisabled inputType='text' value={selectedEmployee?.Position} />
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Departamento' stateName='departamento' isDisabled inputType='text' value={selectedEmployee?.Department} />
          <LicenciasMedicasInputComponent labelName='Area' stateName='Area' onChange={handleInputChange} isDisabled inputType='text' value={selectedEmployee?.Area} />
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Diagnóstico' isRequired stateName='Diagnostic' isDisabled={false} inputType='text' onChange={handleInputChange} value={registerLeave.Diagnostic} />
          <LicenciasMedicasInputComponent labelName='Horas diarias de trabajo' stateName='TotalHours' isDisabled={false} inputType='number' onChange={handleInputChange} value={registerLeave.TotalHours} />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasDatePickerComponent labelName='Inicio de licencia' isRequired stateName='DepartureDate' onChange={handleInputChange} placeholder='Seleccionar fecha inicio....' value={registerLeave.DepartureDate} />
          <LicenciasMedicasDatePickerComponent labelName='Fin de licencia' isRequired  stateName='EndDate' onChange={handleInputChange} placeholder='Seleccionar fecha fin....' value={registerLeave.EndDate} />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasDatePickerComponent labelName='Reingreso' stateName='ReEntryDate' onChange={handleInputChange} placeholder='Seleccionar fecha Reingreso....' value={registerLeave.ReEntryDate} />
          <LicenciasMedicasDatePickerComponent labelName='Recibida' stateName='DateRecieved' onChange={handleInputChange} placeholder='Seleccionar fecha Recibida....' value={registerLeave.DateRecieved} />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Cant dias' stateName='TotalDays' isDisabled={false} inputType='number' onChange={handleInputChange} value={registerLeave.TotalDays} />
          <div className=' flex justify-between gap-4'>
            <LicenciasMedicasInputComponent labelName='Costo licencia' stateName='LicenseCost' isDisabled inputType='number' value={registerLeave.LicenseCost} />
            <LicenciasMedicasInputComponent labelName='Rembolso TSS' stateName='TSSRefund' isDisabled={false} inputType='number' onChange={handleInputChange} value={registerLeave.TSSRefund} />
          </div>

        </div>
        <div className='mt-2 flex justify-start'>
          <LicenciasMedicasTextareaComponent labelName='Comentario' stateName='Comments' value={registerLeave.Comments} onChange={handleInputChange} />
        </div>

      </form>
      <div className='my-4 flex justify-end gap-4'>
        <LicenciasMedicasButtonComponent onClick={sendRegisterLeave} buttonName='Guardar' buttonStyle='py-[6px] hover:cursor-pointer border-0 rounded-sm px-5 text-sm bg-sky-700 text-white font-bold' />
        <LicenciasMedicasButtonComponent onClick={sendRegisterLeave} buttonName='Limpiar' buttonStyle='py-[6px] hover:cursor-pointer border-0 rounded-sm px-5 text-sm bg-sky-200 text-sky-700 font-bold' />
      </div>

    </>

  );

}
export default LicenciasMedicas;