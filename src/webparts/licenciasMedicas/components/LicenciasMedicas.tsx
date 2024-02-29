import * as React from 'react';
import styles from './LicenciasMedicas.module.scss';
import type { ILicenciasMedicasProps } from './ILicenciasMedicasProps';
import LicenciasMedicasInputComponent from './LicenciasMedicasInputComponent/LicenciasMedicasInputComponent'
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
          <LicenciasMedicasInputComponent labelName='Colaborador' labelFor='colaborador' isDisabled={false} inputType='text' />
          <LicenciasMedicasInputComponent labelName='Posición' labelFor='posicion' isDisabled={true} inputType='text' />
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Departamento' labelFor='departamento' isDisabled={true} inputType='text' />
          <LicenciasMedicasInputComponent labelName='Area' labelFor='area' isDisabled={true} inputType='text' />
        </div>

      </form>

    </>

  );
}
export default LicenciasMedicas;