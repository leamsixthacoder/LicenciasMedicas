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
import { useEffect, useState } from 'react';
import { UseRegisterStore } from '../store/RegistroLicencia';
import { getValidation } from '../logic/Validation';
import MedicalLeavePopupAlert from './MedicalLeavePopupAlert/MedicalLeavePopupAlert';
import { Label } from 'office-ui-fabric-react';
import { Player } from '@lottiefiles/react-lottie-player';
interface ValidationMessage {
  [key: string]: string;
}

const LicenciasMedicas: React.FC<ILicenciasMedicasProps> = (props) => {
  const { EmailAdmUsers, userEmail } = props
  const emailAdmUsersArray = EmailAdmUsers as string[];

  const [validationMessage, setValidationMessage] = useState<ValidationMessage>({})
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false)

  const employees = UseEmployeesStore(state => state.employees)
  const isLoading = UseEmployeesStore(state => state.isLoading)
  const fetchEmployees = UseEmployeesStore(state => state.fetchEmployees)
  const selectEmployee = UseEmployeesStore((state) => state.selectEmployee)
  const resetSelectedEmployeeState = UseEmployeesStore((state => state.resetSelectedEmployeeState))
  const selectedEmployee = UseEmployeesStore((state) => state.selectedEmployee)

  const registerLeave = UseRegisterStore((state => state.registerLeave))
  const setRegisterLeave = UseRegisterStore((state => state.setRegisterLeave))
  const postRegisterLeave = UseRegisterStore((state => state.postRegisterLeave))
  const isSuccesful = UseRegisterStore((state => state.isSuccesful))
  const resetRegisterLeaveState = UseRegisterStore((state => state.resetRegisterLeaveState))


  useEffect(() => {
    void fetchEmployees();
  }, [fetchEmployees]);

  const resetSelectedValue = () => {
    setSelectedValue(null); // Set the selected value to null or your default value
  }
  const getEmployeeOptions = () => {
    const options = employees.map((key) => ({
      value: key.EmployeeId,
      label: `${key.EmployeeId} ${key.Name}`
    }))
    return options
  }

  const differenceInDays = (startDate: Date, endDate: Date): number => {
    const utcStartDate = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
    const utcEndDate = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())

    // Calculate the difference in milliseconds
    const diffMilliseconds = utcEndDate - utcStartDate;    // Convert milliseconds to days
    return Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
  }


  const handleSelectEmployee = async (selectedOption: any) => {
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

  const handleInputChange = async (value: any, stateName: string) => {
    handleValidationMessage()
    if (selectedEmployee) {
      const { Salary } = selectedEmployee
      setRegisterLeave(stateName, value, Salary)
      const { DepartureDate, EndDate } = registerLeave
      if (stateName === 'DepartureDate') setRegisterLeave('TotalDays', differenceInDays(EndDate, value), Salary)
      if (stateName === 'EndDate') setRegisterLeave('TotalDays', differenceInDays(DepartureDate, value), Salary)
    }
  };

  const handleValidationMessage = () => {
    const errors = getValidation(registerLeave)
    setValidationMessage(errors)
  }

  const sendRegisterLeave = async () => {
    handleValidationMessage()
    if (Object.keys(validationMessage).length === 0) {
      await postRegisterLeave(registerLeave)
      cleanState()
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 3000);
    }
  }


  const cleanState = () => {
    resetRegisterLeaveState()
    resetSelectedEmployeeState()
    resetSelectedValue()
  }

  return (

    <>

      {emailAdmUsersArray.includes(userEmail) ? (
        <>
          <div className={`${styles.borderBottom} flex justify-between`}>
            <h1 className='text-[#0058a6] ml-4 mb-2 text-2xl'>Registro Licencia Médica</h1>
            <div className='flex text- '>
              <LicenciasMedicasButtonComponent onClick={cleanState} buttonName='Reporte' buttonStyle='self-center py-[6px] hover:cursor-pointer mt-2 border-0 rounded-sm px-6 bg-green-500 text-base text-sky-50 font-bold' />
            </div>
          </div>
          <div className='flex justify-end my-1'>
            <span className='text-[10px] font-extrabold'>Campos marcados con <strong className='text-red-600 '>*</strong> son obligatorios</span>
          </div>
          <form className='mt-10 mx-2'>

            <div className='mt-2 flex justify-between gap-4'>
              <LicenciasMedicasSelectComponent labelName='Colaborador' isRequired labelFor='Name' options={getEmployeeOptions()} selectedValue={selectedValue} setSelectedValue={setSelectedValue} isLoading={isLoading} onSelect={handleSelectEmployee} />
              <LicenciasMedicasInputComponent labelName='Posición' stateName='Position' onChange={handleInputChange} isDisabled inputType='text' value={selectedEmployee?.Position} />
            </div>

            <div className='mt-2 flex justify-between gap-4'>
              <LicenciasMedicasInputComponent labelName='Departamento' stateName='departamento' isDisabled inputType='text' value={selectedEmployee?.Department} />
              <LicenciasMedicasInputComponent labelName='Area' stateName='Area' onChange={handleInputChange} isDisabled inputType='text' value={selectedEmployee?.Area} />
            </div>
            <div className='mt-2 flex  gap-4'>
              <LicenciasMedicasInputComponent labelName='Diagnóstico' isRequired stateName='Diagnostic' isDisabled={false} inputType='text' onChange={handleInputChange} value={registerLeave.Diagnostic} />
              <div className=' flex justify-between gap-4'>
                <LicenciasMedicasInputComponent labelName='Salario' stateName='salary' isDisabled inputType='text' value={'DOP: ' + selectedEmployee?.Salary.toFixed(2)} />
                <LicenciasMedicasInputComponent labelName='Horas diarias de trabajo' stateName='TotalHours' isDisabled={false} inputType='number' onChange={handleInputChange} value={registerLeave.TotalHours} />
              </div>

            </div>
            <div className='mt-2 flex justify-between gap-4'>
              <LicenciasMedicasDatePickerComponent labelName='Inicio de licencia' isRequired stateName='DepartureDate' onChange={handleInputChange} placeholder='Seleccionar fecha inicio....' value={registerLeave.DepartureDate} />
              <LicenciasMedicasDatePickerComponent labelName='Fin de licencia' isRequired stateName='EndDate' onChange={handleInputChange} placeholder='Seleccionar fecha fin....' value={registerLeave.EndDate} />
            </div>
            <div className='mt-2 flex justify-between gap-4'>
              <LicenciasMedicasDatePickerComponent labelName='Reingreso' stateName='ReEntryDate' onChange={handleInputChange} placeholder='Seleccionar fecha Reingreso....' value={registerLeave.ReEntryDate} />
              <LicenciasMedicasDatePickerComponent labelName='Recibida' stateName='DateRecieved' onChange={handleInputChange} placeholder='Seleccionar fecha Recibida....' value={registerLeave.DateRecieved} />
            </div>
            <div className='mt-2 flex  gap-4'>
              <LicenciasMedicasInputComponent labelName='Cant dias' stateName='TotalDays' isDisabled={false} inputType='number' onChange={handleInputChange} value={registerLeave.TotalDays} />
              <div className=' flex justify-between gap-4'>
                <LicenciasMedicasInputComponent labelName='Costo licencia' stateName='LicenseCost' isDisabled inputType='text' value={'DOP: ' + registerLeave.LicenseCost} />
                <LicenciasMedicasInputComponent labelName='Rembolso TSS' stateName='TSSRefund' isDisabled={false} inputType='number' onChange={handleInputChange} value={registerLeave.TSSRefund} />
              </div>

            </div>
            <div className='mt-2 flex justify-start'>
              <LicenciasMedicasTextareaComponent labelName='Comentario' stateName='Comments' value={registerLeave.Comments} onChange={handleInputChange} />
            </div>
            {Object.keys(validationMessage).length > 0 && (

              <span className='mt-3 text-red-600 text-sm font-semibold'>
                {validationMessage[Object.keys(validationMessage)[0]]}
              </span>
            )}
            {
              isVisible && (
                isSuccesful ? (
                  <MedicalLeavePopupAlert message='Datos guardados exitosamente' styles='bg-green-50 text-green-600' />
                ) : (
                  <MedicalLeavePopupAlert message='Algo salio mal, intentelo de nuevo mas tarde' styles='bg-red-300 text-red-600' />
                )
              )
            }


          </form>
          <div className='my-4 flex justify-end gap-4'>
            <LicenciasMedicasButtonComponent onClick={sendRegisterLeave} buttonName='Guardar' isDisabled={Object.keys(validationMessage).length > 0} buttonStyle='py-[6px] hover:cursor-pointer border-0 rounded-sm px-5 text-sm bg-sky-700 text-white font-bold' />
            <LicenciasMedicasButtonComponent onClick={cleanState} buttonName='Limpiar' buttonStyle='py-[6px] hover:cursor-pointer border-0 rounded-sm px-5 text-sm bg-sky-200 text-sky-700 font-bold' />
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_bdnjxekx.json"
            style={{ height: "300px", width: "300px" }}
            speed={0.7}
           />
          <Label
            style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}
          >
            {'No tiene acceso a esta sección'}
          </Label>
        </div>
      )}


    </>

  );

}
export default LicenciasMedicas;