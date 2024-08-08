'use client';

import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { getOrgaos } from '@/services/dataService';

export function StepByStepScheduling() {
  const [currentStep, setCurrentStep] = useState(1);
  const [idScheduling, setIdScheduling] = useState('')
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    dateOfBirth: '',
    email: '',
    telephone: '',
    agency: '',
    service: '',
    unidade: '',
    municipio: '',
    gender: '',
    date: '',
    time: '',
  });


  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await getOrgaos();
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const router = useRouter();

  const nextPage = () => {
    router.push('/payment')
    //router.push(`/payment/${idScheduling}`);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };


  const sendScheduling = async () => {
    try {
      const response = await fetch('/api/scheduling', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        //const responseData = await response.json(); 
        //const { id } = responseData; 
        //setIdScheduling(id)
        localStorage.setItem('toastMessage', 'Agendamento realizado com sucesso!');
        nextPage();
      } else {
        toast.error(`Erro ao realizar o agendamento`, {
          position: 'top-right',
        });
      }
    } catch (error) {
      toast.error(`Erro ao realizar o agendamento`, {
        position: 'top-right',
      });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentStep === 3) {
      sendScheduling();
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const genderOptions = [
    { value: '', label: 'Selecione um gênero' },
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
    { value: 'other', label: 'Outro' },
  ];

  const agencyOptions = [
    { value: '', label: 'Selecione um órgão' },
    { value: 'agency1', label: 'Órgão 1' },
    { value: 'agency2', label: 'Órgão 2' },
  ];

  const serviceOptions = [
    { value: '', label: 'Selecione um serviço' },
    { value: 'service1', label: 'Serviço 1' },
    { value: 'service2', label: 'Serviço 2' },
  ];

  const unidadeOptions = [
    { value: '', label: 'Selecione uma unidade' },
    { value: 'unidade1', label: 'Unidade 1' },
    { value: 'unidade2', label: 'Unidade 2' },
  ];

  const municipioOptions = [
    { value: '', label: 'Selecione um município' },
    { value: 'municipio1', label: 'Município 1' },
    { value: 'municipio2', label: 'Município 2' },
  ];

  const timeOptions = [
    { value: '', label: 'Selecione um horário' },
    { value: '09:00', label: '09:00' },
    { value: '09:30', label: '09:30' },
    { value: '10:00', label: '10:00' },
    { value: '10:30', label: '10:30' },
    { value: '11:00', label: '11:00' },
    { value: '11:30', label: '11:30' },
    { value: '12:00', label: '12:00' },
    { value: '12:30', label: '12:30' },
    { value: '13:00', label: '13:00' },
    { value: '13:30', label: '13:30' },
    { value: '14:00', label: '14:00' },
  ];

  const reviewData = [
    { label: 'Nome Completo', value: formData.fullName },
    { label: 'CPF', value: formData.cpf },
    { label: 'Data de Nascimento', value: formData.dateOfBirth },
    { label: 'Email', value: formData.email },
    { label: 'Telefone', value: formData.telephone },
    { label: 'Gênero', value: formData.gender },
    { label: 'Órgão', value: formData.agency },
    { label: 'Serviço', value: formData.service },
    { label: 'Unidade', value: formData.unidade },
    { label: 'Município', value: formData.municipio },
    { label: 'Data', value: formData.date },
    { label: 'Horário', value: formData.time },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen py-8">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-between">
            <div
              className={`z-10 flex-1 rounded-full py-2 text-sm font-medium text-center cursor-pointer transition-colors duration-300 ease-in-out ${
                currentStep === 1
                  ? 'bg-azulGoias text-primary-foreground border-2 border-primary'
                  : 'bg-background text-muted-foreground'
              }`}
              onClick={() => setCurrentStep(1)}
            >
              Dados Pessoais
            </div>
            <div
              className={`z-10 flex-1 rounded-full py-2 text-sm font-medium text-center cursor-pointer transition-colors duration-300 ease-in-out ${
                currentStep === 2
                  ? 'bg-azulGoias text-primary-foreground border-2 border-primary'
                  : 'bg-background text-muted-foreground'
              }`}
              onClick={() => setCurrentStep(2)}
            >
              Dados do Agendamento
            </div>
            <div
              className={`z-10 flex-1 rounded-full py-2 text-sm font-medium text-center cursor-pointer transition-colors duration-300 ease-in-out ${
                currentStep === 3
                  ? 'bg-azulGoias text-primary-foreground border-2 border-primary'
                  : 'bg-background text-muted-foreground'
              }`}
              onClick={() => setCurrentStep(3)}
            >
              Revisão
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" name="cpf" value={formData.cpf} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <Label htmlFor="dateOfBirth">Data de Nascimento</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="telephone">Telefone</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gênero</Label>
                  <Select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    options={genderOptions}
                    required
                    label={''}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant='main' onClick={handleNext}>
                  Avançar
                </Button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <Label htmlFor="agency">Órgão</Label>
                  <Select
                    id="agency"
                    name="agency"
                    value={formData.agency}
                    onChange={handleInputChange}
                    options={agencyOptions}
                    required
                    label={''}
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="service">Serviço</Label>
                  <Select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    options={serviceOptions}
                    required
                    label={''}
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="unidade">Unidade</Label>
                  <Select
                    id="unidade"
                    name="unidade"
                    value={formData.unidade}
                    onChange={handleInputChange}
                    options={unidadeOptions}
                    required
                    label={''}
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="municipio">Município</Label>
                  <Select
                    id="municipio"
                    name="municipio"
                    value={formData.municipio}
                    onChange={handleInputChange}
                    options={municipioOptions}
                    required
                    label={''}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <Label htmlFor="date">Data</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="municipio">Horário</Label>
                  <Select
                    id="horario"
                    name="horario"
                    value={formData.time}
                    onChange={handleInputChange}
                    options={timeOptions}
                    required
                    label={''}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <Button onClick={handlePrevious} className='bg-gray-500 hover:bg-gray-700'>Voltar</Button>
                <Button onClick={handleNext} variant='main'>
                  Avançar
                </Button>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Revisão dos Dados</h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {reviewData.map((item, index) => (
                  <div key={index} className="flex justify-between mb-2">
                    <div className="font-medium">{item.label}</div>
                    <div>{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <Button className="bg-gray-500 hover:bg-gray-700 text-white" onClick={handlePrevious}>
                  Voltar
                </Button>
                <Button variant='main' type="submit">
                  Confirmar
                </Button>
              </div>
            </div>
          )}
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
