/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-caminhada-leve-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom3.jpg?ims=120x"
                alt="Tenis"
              />
            </td>

            <td>
              <strong>Tênis muito foda.</strong>
              <span>R$ 129,90</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$ 258,80</strong>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL:</span>
          <strong>R$ 1239,90</strong>
        </Total>
      </footer>
    </Container>
  );
}
