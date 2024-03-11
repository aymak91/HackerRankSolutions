def getRegions(ip_addresses):
    def get_loca(ip):
        # Split the IP address into octets
        ip = ip.split('.')
        
        # Check if each octet is within the valid range (0-255)
        for i in ip[1:]:
            if not 0 <= int(i) <= 255:
                return -1
        
        # Define the IP ranges and their corresponding regions
        ip_ranges = (
            (240, 256, 5),    # Range 1: IP addresses starting from 240 to 255 (exclusive) have region 5
            (224, 240, 4),    # Range 2: IP addresses starting from 224 to 240 (exclusive) have region 4
            (192, 224, 3),    # Range 3: IP addresses starting from 192 to 224 (exclusive) have region 3
            (128, 192, 2),    # Range 4: IP addresses starting from 128 to 192 (exclusive) have region 2
            (0, 128, 1)       # Range 5: IP addresses starting from 0 to 128 (exclusive) have region 1
        )
        
        # Iterate through the IP ranges and check which range the IP address falls into
        for s, e, ans in ip_ranges:
            if s <= int(ip[0]) < e:
                return ans
        
        # If the IP address doesn't fall into any range, return -1
        return -1
    
    # Iterate through the list of IP addresses and call get_loca() for each address
    return [get_loca(ip) for ip in ip_addresses]
