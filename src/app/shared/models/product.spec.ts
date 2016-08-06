import {Product} from './product'

describe('Shared', () => {
  describe('Models', () => {

    describe('Product', () => {

      let underTest:Product;

      beforeEach(() => {
        underTest = new Product(
          1234,
          'Some Product',
          4.75,
          1,
          'https://some-url.com/some-image.png'
        );
      });

      describe('increaseQty', () => {
        it('should increase the item qty by one when called', () => {
          //Arrange
          expect(underTest.qty).toEqual(1);

          //Act
          underTest.increaseQty();

          //Assert
          expect(underTest.qty).toEqual(2);
        });
      });

      describe('decreaseQty', () => {
        it('should decrease the item qty by one when called', () => {
          //Arrange
          underTest.increaseQty();
          expect(underTest.qty).toEqual(2);

          //Act
          underTest.decreaseQty();

          //Assert
          expect(underTest.qty).toEqual(1);
        });
      });

      describe('setQty', () => {
        it('should decrease set the item qty by when called', () => {
          //Arrange
          expect(underTest.qty).toEqual(1);

          //Act
          underTest.setQty(5);

          //Assert
          expect(underTest.qty).toEqual(5);
        });
      });

      describe('getCost', () => {
        it('should return the product of qty and price when called', () => {

          //Arrange
          underTest.setQty(5);
          underTest.price = 2.5;

          //Act
          let response = underTest.getCost();

          //Assert
          expect(response).toEqual(12.5);

        });
      });



    });

  });
});

