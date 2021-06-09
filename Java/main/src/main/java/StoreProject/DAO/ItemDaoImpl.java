package StoreProject.DAO;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import StoreProject.DTO.Item;
import StoreProject.DTO.ItemFormatted;

@Repository
public class ItemDaoImpl implements ItemDao
{
	@Autowired
	JdbcTemplate jdbc;


	public List<ItemFormatted> getItemsByCategory(Integer categoryID) 
	{
		String GET_ITEMS_FOR_CATEGORY="SELECT i.* FROM item i, itemsincategory ic WHERE i.id = ic.itemID AND ic.categoryID= ?";
	    List<Item> items = jdbc.query(GET_ITEMS_FOR_CATEGORY,new ItemMapper(),categoryID);
	    return formatItems(items);
	
	}

	public List<ItemFormatted> getItemsOnSale() 
	{
		String SELECT_ITEMS_ON_SALE="SELECT * FROM item WHERE percentageOFF!=0.00";
	    List<Item> items = jdbc.query(SELECT_ITEMS_ON_SALE,new ItemMapper());
	    return formatItems(items);
	}
	private List<ItemFormatted> formatItems(List<Item> items)
	{
		List<ItemFormatted> itemsFormatted = new ArrayList<ItemFormatted>();
		DecimalFormat df = new DecimalFormat("0.00");
		    
		    for(int i=0;i<items.size();i++)
		    {
		    	Item item = items.get(i);
		    	ItemFormatted itemFormatted = new ItemFormatted();
		    	itemFormatted.setId(item.getId());
		    	itemFormatted.setName(item.getName());
		    	itemFormatted.setDescription(item.getDescription());
		    	itemFormatted.setUrl(item.getUrl());
		    	String price = df.format(item.getPrice());
		    	itemFormatted.setPrice(price);
		    	String percentageOFF= df.format(item.getPercentageOFF());
		    	itemFormatted.setPercentageOFF(percentageOFF);
		    	itemsFormatted.add(itemFormatted);
		    	
		     }
		    return itemsFormatted;
		
	}
	
	
	
	
}
