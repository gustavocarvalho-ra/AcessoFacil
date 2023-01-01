/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { api } from '../../hooks/useApi';

export function useListUsers(id) {
  const qrId = id;
  const [qrCodeInformation, setQrCodeInformation] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/qrcode/answers', { params: { qrId } });
        setQrCodeInformation(data);
        return data;
      } catch {
        console.log('Error trying to search for this category!');
      }
    })();
  }, []);

  return {
    qrCodeInformation,
  };
}

export function useListNumbersAnswers(id) {
  const [answers, setAnswers] = useState([]);
  const qrId = id;
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/qrcode/numberanswers', { params: { qrId } });
        setAnswers(data);
        return data;
      } catch {
        console.log('Error trying to search for this category!');
      }
    })();
  }, []);

  return {
    answers,
  };
}
