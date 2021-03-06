import { RoundModel } from './round.model';
import { ProductModel } from './product.model';
import { BarMock } from './bar.mock';

describe('Shared', () => {
  describe('Models', () => {

    describe('RoundModel', () => {

      let underTest : RoundModel;

      beforeEach(() => {
        underTest = new RoundModel(1234, BarMock[0], Date.now());
      });

      describe('addProduct', () => {
        it('should add a product when called with a product', () => {
          //Arrange
          let product = new ProductModel(1234, 'some product', 2.00);

          //Act
          let response = underTest.addProduct(product);

          //Assert
          expect(response).toBe(underTest.products);
          expect(response[0]).toBe(product);
        });

      });

      describe('removeProduct', () => {
        it('should remove a product when called with an index', () => {
          //Arrange
          let productA = new ProductModel(1234, 'some product', 2.00);
          let productB = new ProductModel(123423, 'some other product', 2.10);
          let productC = new ProductModel(123465464, 'some other other product', 2.02);
          underTest.addProduct(productA);
          underTest.addProduct(productB);
          underTest.addProduct(productC);

          //Act
          let response = underTest.removeProduct(1);

          //Assert
          expect(response).toBe(underTest.products);
          expect(response.length).toBe(2);
          expect(response[0]).toBe(productA);
          expect(response[1]).toBe(productC);
        });

      });

      describe('getCost', () => {
        it('should return the total cost of all products in the round', () => {

          //Arrange
          let productA = new ProductModel(1234, 'some product', 2.50, 2);
          let productB = new ProductModel(123423, 'some other product', 2.00, 5);
          let productC = new ProductModel(123465464, 'some other other product', 10.00, 1);
          underTest.addProduct(productA);
          underTest.addProduct(productB);
          underTest.addProduct(productC);

          //Act
          let response = underTest.getCost();

          //Assert
          expect(response).toEqual(25.00);
        });

      });


    });

  });
});
