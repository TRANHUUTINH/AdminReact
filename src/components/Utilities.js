import React from 'react';
import {Tag, 
  Notebook,
  CreditCard,
  CurrencyCircleDollar,
  ShieldCheck
} from "phosphor-react";
import "../asset/css/utillities.css"

export const Utilities = () => {
  const voucherlink = 'https://gearvn.com/pages/bi-kip-san-voucher';
  const technewslink = 'https://gearvn.com/blogs/all';
  const paymentduide = 'https://www.youtube.com/c/GEARVNofficial/videos';
  const installment = 'https://gearvn.com/pages/huong-dan-tra-gop';
  const warrantypolicy = 'https://gearvn.com/pages/chinh-sach-bao-hanh';


  return (
    <div className='Utilities'>
      <a href={voucherlink} target='_blank' rel='noopener noreferrer'>
        <Tag size={20} color="#505c8c" weight="light" />
        Bí kíp săn voucher
      </a>
      <a href={technewslink} target='_blank' rel='noopener noreferrer'>
      <Notebook size={20} color="#505c8c" weight="light" />       
       Tin công nghệ
      </a>
      <a href={paymentduide} target='_blank' rel='noopener noreferrer'>
      <CreditCard size={20} color="#505c8c" weight="light" />     
         Hướng dẫn thanh toán
      </a>
      <a href={installment} target='_blank' rel='noopener noreferrer'>
      <CurrencyCircleDollar size={20} color="#505c8c" weight="light" />     
         Hướng dẫn trả góp
      </a>
      <a href={warrantypolicy} target='_blank' rel='noopener noreferrer'>
      <ShieldCheck size={20} color="#505c8c" weight="light" />      
        Chính sách bảo hành
      </a>

    </div>
  );
};
