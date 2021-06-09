package StoreProject.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"StoreProject.Dao","StoreProject.Controllers"})
public class MainApplication 
{

	public static void main(String[] args) {
		ConfigurableApplicationContext appContext=SpringApplication.run(MainApplication.class, args);
		/*
		 *Below is just test data
		StoreDao dao = appContext.getBean(StoreDao.class);
		Store s = dao.getStoreById(2);
		
		List<Store> stores = dao.getAllStores();
		for(int i=0;i<stores.size();i++)
		{
			System.out.println("Name of Store: " +stores.get(i).getName() + " Store Addres: " + stores.get(i).getAddress() + " Are Open?:" + stores.get(i).isAreOpen());
		}
		
		System.out.println("Getting store by ID");
		System.out.println("ID: " +  s.getId() + " Name: " + s.getName());
		*/
	}

}
