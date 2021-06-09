package StoreProject.DAO;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import StoreProject.DTO.MyTime;
import StoreProject.DTO.Store;
import StoreProject.DTO.StoreHours;

@Repository
public class StoreDaoImpl implements StoreDao 
{
	@Autowired
	JdbcTemplate jdbc;


	public List<Store> getAllStores() 
	{
		final String SELECT_ALL_STORES = "SELECT * FROM store";
        return jdbc.query(SELECT_ALL_STORES,new StoreMapper());
	}


	public Store getStoreById(int id) 
	{
		try 
		{
			final String SELECT_STORE_BY_ID = "SELECT * FROM store WHERE id = ?";
			return jdbc.queryForObject(SELECT_STORE_BY_ID, new StoreMapper(), id);//returns room Object
		}
		catch(Exception e)
		{
			return null;
		}
	}

	public List<StoreHours> getHours() 
	{
		List<Store> stores = getAllStores();
		List<StoreHours> hours = new ArrayList<StoreHours>();
		for(int i=0;i<stores.size();i++)
		{
			List<MyTime> myTimes  = new ArrayList<MyTime>();
			String hoursString = stores.get(i).getHours();
			System.out.println(hoursString);
			String[] splitHours = hoursString.split("/");
			System.out.println("First Element: " + splitHours[0]);
			System.out.println("Size of first split: " + splitHours.length);
			StoreHours s = new StoreHours();
			s.setId(stores.get(i).getId());
			for(int j=0;j<splitHours.length;j++)
			{
				MyTime t = new MyTime();
				String hour = splitHours[j];
				String[] splitData = hour.split(",");
				System.out.println("Size: " + splitData.length);
				t.setDay(Integer.parseInt(splitData[0]));
				t.setOpen(splitData[1]);
				t.setClose(splitData[2]);
				myTimes.add(t);
				
				
			}
			s.setTimes(myTimes);
			hours.add(s);
			
			
			
		}
		return hours;
	}
	

	
	
}
