package com.example.prj.service.impl;

import com.example.prj.entity.Item;
import com.example.prj.entity.Order;
import com.example.prj.entity.User;
import com.example.prj.pojo.ItemPojo;

import com.example.prj.pojo.OrderPojo;
import com.example.prj.repository.ItemRepository;
import com.example.prj.repository.OrderRepository;
import com.example.prj.repository.UserRepository;
import com.example.prj.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;
    private final UserRepository userRepository;
    @Override
    public void saveItem(OrderPojo orderPojo) {
        Order order=new Order();
        Item item=itemRepository.findById(orderPojo.getId()).get();
        User user=userRepository.findById(orderPojo.getId()).get();
        order.setItem(item);
        order.setUser(user);
        order.setSales_Quantity(orderPojo.getSalesQuantity());

//        if(orderPojo.getId()!=null){
//            order=orderRepository.findById(orderPojo.getId())
//                    .orElseThrow(()-> new NoSuchElementException("No data found"));
//        }
//
//        order.setItemName(orderPojo.getItemName());
//        item.setItemImage(itemPojo.getItemImage());
//        item.setItemDescription(itemPojo.getItemDescription());
//        item.setItemQuantity(itemPojo.getItemQuantity());
//        item.setItemPerPrice(itemPojo.getItemPerPrice());

        orderRepository.save(order);

    }

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<Order> findById(Integer id) {

        return orderRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        orderRepository.deleteById(id);
    }


}
