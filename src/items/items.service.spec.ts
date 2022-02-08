import { Test } from '@nestjs/testing';
import { ItemRepository } from './item.reopsitory';
import { ItemsService } from './items.service';
import { UserStatus } from '../auth/user-status.enum';
import { ItemStatus } from './item-status.enum';

const mockItemRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
});

const mockUser1 = {
  id: '1',
  username: 'test1',
  password: '1234',
  status: UserStatus.PREMIUM,
};

const mockUser2 = {
  id: '2',
  username: 'test2',
  password: '1234',
  status: UserStatus.FREE,
};

describe('ItemsServiceTest', () => {
  let itemsService;
  let itemRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: ItemRepository,
          useFactory: mockItemRepository,
        },
      ],
    }).compile();
    itemsService = module.get<ItemsService>(ItemsService);
    itemRepository = module.get<ItemRepository>(ItemRepository);
  });

  describe('findAll', () => {
    it('correct', async () => {
      const expected = [];
      itemRepository.find.mockResolvedValue(expected);
      const result = await itemsService.findAll();
      expect(result).toEqual(expected);
    });
  });

  describe('findById', () => {
    it('correct', async () => {
      const expected = {
        id: 'test-id',
        name: 'PC',
        price: '50000',
        description: '',
        status: ItemStatus.ON_SALE,
        createdAt: '',
        updatedAt: '',
        userId: mockUser1.id,
        user: mockUser1,
      };

      itemRepository.findOne.mockResolvedValue(expected);
      const result = await itemsService.findById('test-id');
      expect(result).toEqual(expected);
    });
  });
});
