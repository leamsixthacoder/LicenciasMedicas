import * as React from 'react';
import styles from './LicenciasMedicas.module.scss';
import type { ILicenciasMedicasProps } from './ILicenciasMedicasProps';
import LicenciasMedicasInputComponent from './LicenciasMedicasInputComponent/LicenciasMedicasInputComponent'
import LicenciasMedicasSelectComponent from './LicenciasMedicasSelectComponent/LicenciasMedicasSelectComponent';
import LicenciasMedicasDatePickerComponent from './LicenciasMedicasDatePickerComponent/LicenciasMedicasDatePickerComponent';
import LicenciasMedicasButtonComponent from './LicenciasMedicasButtonComponent/LicenciasMedicasButtonComponent';
import LicenciasMedicasTextareaComponent from './LicenciasMedicasTextareaComponent/LicenciasMedicasTextareaComponent';
// import { escape } from '@microsoft/sp-lodash-subset';

const LicenciasMedicas: React.FC<ILicenciasMedicasProps> = () => {

  // const {
  //   description,
  //   isDarkTheme,
  //   environmentMessage,
  //   hasTeamsContext,
  //   userDisplayName
  // } = props;

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
          <LicenciasMedicasSelectComponent labelName='Colaborador' labelFor='colaborador' />
          <LicenciasMedicasInputComponent labelName='Posición' labelFor='posicion' isDisabled inputType='text' />
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Departamento' labelFor='departamento' isDisabled inputType='text' />
          <LicenciasMedicasInputComponent labelName='Area' labelFor='area' isDisabled inputType='text' />
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Diagnóstico' labelFor='diagnostico' isDisabled={false} inputType='text' />
          <LicenciasMedicasInputComponent labelName='Costo licencia' labelFor='costlicencia' isDisabled inputType='number' />
          
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasDatePickerComponent labelName='Inicio de licencia' placeholder='Seleccionar fecha inicio....' />
          <LicenciasMedicasDatePickerComponent labelName='Fin de licencia' placeholder='Seleccionar fecha fin....' />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasDatePickerComponent labelName='Reingreso' placeholder='Seleccionar fecha Reingreso....' />
          <LicenciasMedicasDatePickerComponent labelName='Recibida' placeholder='Seleccionar fecha Recibida....' />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Cant dias' labelFor='cantdias' isDisabled inputType='number' />
          <LicenciasMedicasInputComponent labelName='Rembolso TSS' labelFor='tssrembolso' isDisabled={false} inputType='number' />
        </div>
        <div className='mt-2 flex justify-start'>
         <LicenciasMedicasTextareaComponent labelName='Comentario' labelFor='comentario' />
        </div>

      </form>
      <div className='my-4 flex justify-end gap-4'>
        <LicenciasMedicasButtonComponent buttonName='Guardar' buttonStyle='py-[6px] hover:cursor-pointer border-0 rounded-sm px-5 text-sm bg-sky-700 text-white font-bold' />
        <LicenciasMedicasButtonComponent buttonName='Limpiar' buttonStyle='py-[6px] hover:cursor-pointer border-0 rounded-sm px-5 text-sm bg-sky-200 text-sky-700 font-bold' />
      </div>

    </>

  );
}
export default LicenciasMedicas;