import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as XLSX from 'xlsx'; 
import Select from 'react-select';
import './styles.css';
import HeaderComponent from "./HeaderComponent.jsx"


const options = [
  {
    value: "DESPACHO SUPERINTENDENTE DE VIGILANCIA Y SEGURIDAD PRIVADA",
    label: "DESPACHO SUPERINTENDENTE DE VIGILANCIA Y SEGURIDAD PRIVADA",
    isCategory: true,
  },
  {
    value: "  OFICINA DE COMUNICACIONES",
    label: "  OFICINA DE COMUNICACIONES",
    category: "GRUPO A",
  },
  {
    value: "  GRUPO DE ASESORIA Y CORDINACION INTERINSTITUCIONAL",
    label: "  GRUPO DE ASESORIA Y CORDINACION INTERINSTITUCIONAL",
    category: "GRUPO A",
  },
  {
    value: "  OFICINA ASESORA DE PLANEACION",
    label: "  OFICINA ASESORA DE PLANEACION",
    category: "GRUPO A",
  },
  {
    value: "  GRUPO DE MECI Y CALIDAD",
    label: "  GRUPO DE MECI Y CALIDAD",
    category: "GRUPO A",
  },
  {
    value: "  OFICINA ASESORA JURÍDICA",
    label: "  OFICINA ASESORA JURÍDICA",
    category: "GRUPO A",
  },
  {
    value: " GRUPO DE COBRO COACTIVO",
    label: " GRUPO DE COBRO COACTIVO",
    category: "GRUPO A",
  },
  {
    value: " GRUPO DE RECURSOS",
    label: " GRUPO DE RECURSOS",
    category: "GRUPO A",
  },
  {
    value: "  GRUPO DE RESPUESTA A DERECHOS DE PETICIÓN",
    label: "  GRUPO DE RESPUESTA A DERECHOS DE PETICIÓN",
    category: "GRUPO A",
  },
  {
    value: "  OFICINA DE CONTROL INTERNO",
    label: "  OFICINA DE CONTROL INTERNO",
    category: "GRUPO A",
  },
  {
    value: "  OFICINA DE SISTEMAS ",
    label: "  OFICINA DE SISTEMAS",
    category: "GRUPO A",
  },
  {
    value: "SUPERINTENDENTE DELEGADA PARA LA OPERACIÓN",
    label: "SUPERINTENDENTE DELEGADA PARA LA OPERACIÓN",
    isCategory: true ,
  },
  {
    value: " GRUPO DE CONSULTORÍA CAPACITACIÓN: 444",
    label: " GRUPO DE CONSULTORÍA CAPACITACIÓN: 444",
    category: "GRUPO B",
  },  
  {
    value: " GRUPO DE ESQUEMAS DE AUTOPROTECCIÓN",
    label: " GRUPO DE ESQUEMAS DE AUTOPROTECCIÓN",
    category: "GRUPO B",
  },
  {
    value: " GRUPO DE PERMISOS DE ESTADOS EMPRESARIALES",
    label: " GRUPO DE PERMISOS DE ESTADOS EMPRESARIALES",
    category: "GRUPO B",
  },
  {
    value: "  DESPACHO SUPERINTENDENTE DELGADO PARA EL CONTROL",
    label: "  DESPACHO SUPERINTENDENTE DELGADO PARA EL CONTROL",
    isCategory: true ,
  },
  {
    value: "  GRUPO DE INSPECCIÓN",
    label: "  GRUPO DE INSPECCIÓN",
    category: "GRUPO C",
  },
  {
    value: "  GRUPO DE QUEJAS",
    label: "  GRUPO DE QUEJAS",
    category: "GRUPO C",
  },  
  {
    value: "  GRUPO DE SANCIONES",
    label: "  GRUPO DE SANCIONES",
    category: "GRUPO C",
  },  
  {
    value: "  GRUPO DE SANCIONES",
    label: "  GRUPO DE SANCIONES",
    category: "GRUPO C",
  },
  {
    value: "  SECRETARÍA GENERAL",
    label: "  SECRETARÍA GENERAL",
    isCategory: true ,
  },
  {
    value: "  GRUPO DE ATENCIÓN AL USUARIO",
    label: "  GRUPO DE ATENCIÓN AL USUARIO",
    category: "GRUPO D",
  },
  {
    value: "  GRUPO CONTROL INTERNO DISCIPLINARIO",
    label: "  GRUPO CONTROL INTERNO DISCIPLINARIO",
    category: "GRUPO D",
  }, 
  {
    value: "  GRUPO DE GESTIÓN DOCUMENTAL ARCHIVO Y CORRESPONDENCIA",
    label: "  GRUPO DE GESTIÓN DOCUMENTAL ARCHIVO Y CORRESPONDENCIA",
    category: "GRUPO D",
  }, 
  {
    value: "  GRUPO DE RECURSOS FINANCIEROS",
    label: "  GRUPO DE RECURSOS FINANCIEROS",
    category: "GRUPO D",
  },  
  {
    value: "  GRUPO DE RECURSOS FÍSICOS Y ADQUISICIONES",
    label: "  GRUPO DE RECURSOS FÍSICOS Y ADQUISICIONES",
    category: "GRUPO D",
  },  
  {
    value: " GRUPO DE RECURSOS HUMANOS",
    label: " GRUPO DE RECURSOS HUMANOS",
    category: "GRUPO D",
  },  
];


const root = document.getElementById('root');
const PrintForm = () => {
  const [formData, setFormData] = useState({
    funcionario:'',
    radicado: '',
    name: '',
    Asunto: '',
    Descripcion: '',
    Folio: '',
    Anexo: '',
    dependencia: '',
    fechaHora: '',
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, funcionario, dependencia } = e.target;

    const upperCaseValue = value.toUpperCase();
    setFormData((prevData) => ({
      ...prevData,
      [name]: upperCaseValue,
      [funcionario]: upperCaseValue,
    }));
  };

      

  const formatFechaHora = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('es-CO', options);
    return formattedDate;
  };


  const handlePrint = () => {
    const newRow = {
      'FUNCIONARIO': formData.funcionario,
      'MES': new Date(formData.fechaHora).toLocaleString('es-CO', { month: 'long' }),
      'FECHA DE RADICADO': formData.fechaHora,
      'FECHA DE LA SOLICITUD': new Date(formData.fechaHora).toLocaleDateString('es-CO'),
      'N° RADICADO': formData.radicado,
      'NOMBRE QUIEN REALIZA SOLICITUD': formData.name,
      'N° FOLIOS': formData.Folio,
      'ANEXOS': formData.Anexo,
      'PROCESO AL QUE SE ENTREGA': formData.dependencia, 
    };
    document.querySelector('.table').classList.add('print-hidden');
  
    window.print();

  document.querySelector('.table').classList.remove('print-hidden')

  setTableData((prevData) => [...prevData, newRow]);
  
  setFormData({
    funcionario: '',
    radicado: '',
    name: '',
    Asunto: '',
    Descripcion: '',
    Folio: '',
    Anexo: '',
    dependencia: '',
    fechaHora: '',
  });
};


  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    XLSX.writeFile(wb, 'formulario.xlsx');
  };


  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  
    setFormData((prevData) => ({
      ...prevData,
      dependencia: selectedOption ? selectedOption.label : '',
    }));
  };

  return (
    <>
   <HeaderComponent/>
    <div className="container mt-5">
      <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Radicación SuperVigilancia</h4>

      <form>
        <div className="row mb-3">

        <div className="col-md-6">
            <label htmlFor="funcionario" className="form-label">
            Funcionario
            </label>
            <input
              type="text"
              className="form-control fixed-width-input"
              id="funcionario"
              name="funcionario"
              value={formData.funcionario}
              onChange={handleInputChange} />
          </div>

          <div className="col-md-6">
            <label htmlFor="radicado" className="form-label">
              Radicado
            </label>
            <input
              type="text"
              className="form-control fixed-width-input"
              id="radicado"
              name="radicado"
              value={formData.radicado}
              onChange={handleInputChange} />
          </div>

          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Empresa o Nombre de persona natural
            </label>
            <input
              type="text"
              className="form-control fixed-width-input"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="Asunto" className="form-label">
              Asunto
            </label>
            <input
              type="text"
              className="form-control"
              id="Asunto"
              name="Asunto"
              value={formData.asunto}
              onChange={handleInputChange} />
          </div>

          <div className="col-md-6">
            <label htmlFor="fechaHora" className="form-label">
              Fecha y Hora
            </label>
            <input
              type="datetime-local"
              className="form-control fixed-width-input"
              id="fechaHora"
              name="fechaHora"
              value={formData.fechaHora}
              onChange={handleInputChange} />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="Descripcion" className="form-label">
            Descripcion
          </label>
          <textarea
            className="form-control fixed-width-input"
            id="Descripcion"
            name="Descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            rows="4" />
        </div>

        <div className="mb-3">
          <label htmlFor="Folio" className="form-label">
            Folio
          </label>
          <input
            className="form-control fixed-width-input"
            id="Folio"
            name="Folio"
            value={formData.Folio}
            onChange={handleInputChange}
            rows="4" />
        </div>

        <div className="mb-3">
          <label htmlFor="Anexo" className="form-label">
            Anexo
          </label>
          <input
            className="form-control fixed-width-input"
            id="Anexo"
            name="Anexo"
            value={formData.Anexo}
            onChange={handleInputChange}
            rows="4" />
        </div>

        <div className="container mt-5">
      <label htmlFor="Dependencia" className="form-label">
        Dependencia
      </label>
      <Select
        id="Dependencia"
        name="Dependencia"
        value={selectedOption ? selectedOption.label : 'Ninguno'}
        onChange={handleChange}
        options={options}
        isSearchable
        isClearable
      />
      <p>Selected Option: {selectedOption ? selectedOption.label : 'Ninguno'}</p>
    </div>
        <button type="button" className="btn btn-primary" onClick={handlePrint}>
          Enviar
        </button>
        <button type="button" className="btn btn-primary" onClick={handlePrint}>
          Imprimir
        </button>
      </form>
      <button type="button" className="btn btn-success" onClick={downloadExcel}>
        Descargar en Excel
      </button>
      <div className="print-template" style={{ position: 'absolute', top: '10px', right: '10px', padding: '2px' }}>
        <div style={{ position: 'absolute', top: '10px', right: '20px', border: '3px solid #333', padding: '10px', width: '400px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', color: '#333', textAlign: 'center' }}>
          <img src="/bloque1665.png" alt="Logo" style={{ width: '100%', marginBottom: '10px' }} />
          <h2 style={{ marginBottom: '10px', fontSize: '1.8em', fontWeight: 'bold' }}>{formData.radicado}</h2>
          <p style={{ marginBottom: '5px', fontSize: '1em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{formatFechaHora(formData.fechaHora)}</p>
          <p style={{ marginBottom: '5px', fontSize: '1.3em', fontWeight: 'bold' }}>{formData.name}</p>
          <p style={{ marginBottom: '5px', fontSize: '0.9em', fontWeight: 'bold' }}>Dep:{selectedOption ? selectedOption.label : 'Ninguno'}</p>
          <p style={{ marginBottom: '5px', fontSize: '0.9em' }}> Folio: {formData.Folio} Anexo: {formData.Anexo} </p>
          <p style={{ marginBottom: '5px', fontSize: '0.9em' }}>USUARIO: CONTACTENOS  </p>

        </div>
      </div>

    </div><table className="table mt-5">
        <thead>
          <tr>
            <th>FUNCIONARIO</th>
            <th>MES</th>
            <th>FECHA DE RADICADO</th>
            <th>FECHA DE LA SOLICITUD</th>
            <th>N° RADICADO</th>
            <th>NOMBRE QUIEN REALIZA SOLICITUD</th>
            <th>N° FOLIOS</th>
            <th>ANEXOS</th>
            <th>PROCESO AL QUE SE ENTREGA</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.FUNCIONARIO}</td>
              <td>{row.MES}</td>
              <td>{row['FECHA DE RADICADO']}</td>
              <td>{row['FECHA DE LA SOLICITUD']}</td>
              <td>{row['N° RADICADO']}</td>
              <td>{row['NOMBRE QUIEN REALIZA SOLICITUD']}</td>
              <td>{row['N° FOLIOS']}</td>
              <td>{row.ANEXOS}</td>
              <td>{row['PROCESO AL QUE SE ENTREGA']}</td>
            </tr>
          ))}
        </tbody>
      </table></>

);
};

export default PrintForm;
