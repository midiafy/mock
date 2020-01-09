import React from "react";

const PricingTable = () => (
  <>
    <div className="pricing-table">
      <div className="pricing-plan is-warning">
        <div className="plan-header">pacotes avulsos</div>
        <div className="plan-price">
          de <strong className="has-text-info">R$ 27</strong> a<br />
          <span className="plan-price-amount">
            <span className="plan-price-currency">R$</span>97
          </span>
          /pacote
        </div>
        <div className="plan-items">
          <div className="plan-item">armazenamos seus arquivos até 1 ano</div>
          <div className="plan-item">mais de 1000 pacotes disponíveis</div>
          <div className="plan-item">até 3 revisões por pacote</div>
          <div className="plan-item">suporte email 24x7</div>
        </div>
        <div className="plan-footer">
          <button className="button is-fullwidth">escolher pacote</button>
        </div>
      </div>

      <div className="pricing-plan is-active">
        <div className="plan-header">
          midiafy <u>Prime</u>
        </div>
        <div className="plan-price">
          <span className="plan-price-amount">
            <span className="plan-price-currency">R$</span>497
          </span>
          /mês
        </div>
        <div className="plan-items">
          <div className="plan-item">crie sem limites</div>
          <div className="plan-item">até 1GB de armazenamento</div>
          <div className="plan-item">milhares de pacotes</div>
          <div className="plan-item">suporte chat 24x7</div>
        </div>
        <div className="plan-footer">
          <button className="button is-fullwidth">navegar no catálogo</button>
        </div>
      </div>
    </div>
  </>
);

export default PricingTable;
