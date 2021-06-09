package StoreProject.DTO;

import java.util.List;

public class StoreHours //strictly used to format hour input for stores
{
	private int id;
	List<MyTime> times;
	public int getId() 
	{
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public List<MyTime> getTimes() {
		return times;
	}
	public void setTimes(List<MyTime> times) {
		this.times = times;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((times == null) ? 0 : times.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		StoreHours other = (StoreHours) obj;
		if (id != other.id)
			return false;
		if (times == null) {
			if (other.times != null)
				return false;
		} else if (!times.equals(other.times))
			return false;
		return true;
	}
	
	
	
	

	
	
	
}
